from django.http import HttpResponseRedirect, HttpResponse, HttpRequest
from django.shortcuts import render, redirect


def index(request: HttpRequest):

    if request.method == "POST":
        return HttpResponse()
    
    return render(request, "index.html")
    