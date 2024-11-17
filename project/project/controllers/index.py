from django.http import HttpResponseRedirect, HttpResponse, HttpRequest
from . import views


def index(request: HttpRequest):

    if request.method == "POST":
        return HttpResponse()
    
    return views.display(request, "index")
    