from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseNotFound
from django.conf import settings
from django.http import FileResponse, HttpRequest, HttpResponse

def display(req: HttpRequest, site: str='index', extra: dict = {}) -> HttpResponse | HttpResponseNotFound:
    """display() is the default function to display static sites/subsites with close to no dynamic content

    Args:
        req (request): request
        site (str, optional): The path of the request. Defaults to 'index'.

    Returns:
        HttpResponse: on success
        HttpResponseNotFound: on missing site (404 error)
    """

    site = site.lower()
    title = site[0].upper() + site[1:]
    try:
        render(req, f'{site}.html')
    except Exception as error:
        print(error)
        eresp = HttpResponseNotFound()
        eresp.write(render(req, f'404.html', {'site': site}).content)
        return eresp
    
    data = createSimpleContext(site, req=req, append = extra)
    resp = HttpResponse()
    if site != 'index':
        resp.write(getPageTop(req=req, data=data))
    if site == 'index':
        resp.write(getPageTop(req=req, data=data, site='index'))
    resp.write(getPageBody(req, site, data))
    resp.write(getPageFoot(req, data))
    
    resp.context = data
    return resp

def createSimpleContext(site: str, req:HttpRequest, append: dict = {}, ):
    """createSimpleContext() generates the default context/data for a site to be put in the head and header.

    Args:
        site (string)

    Returns:
        dictionary
    """
    site = site.lower()
    #title = site[0].upper() + site[1:]
    data = {
        'css_path': f'{site}.css',
        'jspath': f'{site}.js',
    }
    data.update(append)
    
    return data

def getPageTop(req: HttpRequest, data: dict, site: str = None):
    """getPageTop() gets the head and the header for a site.

    Args:
        req (HttpRequest)

        data (dictionary)

    Returns:
        string
    """
    resp = HttpResponse()
    resp.write(render(req, 'head.html', data).content)
    resp.write(render(req, 'header.html', data).content)
    return resp.content

def getPageFoot(req: HttpRequest, data: dict):
    """getPageFoot() gets the footer for a site.

    Args:
        req (HttpRequest)

        data (dictionary)

    Returns:
        string
    """
    resp = HttpResponse()
    resp.write(render(req, 'footer.html', data).content)
    return resp.content

def getPageBody(req: HttpRequest, site: str, data: dict):
    """getPageBody() gets the body of a site.

    Args:
        req (HttpRequest)

        data (dictionary)

    Returns:
        string
    """
    resp = HttpResponse()
    resp.write(render(req, f'{site}.html', data).content)
    return resp.content

def handleInvalidRequest(req):
    return HttpResponse("<h1>Invalid request method</h1>")