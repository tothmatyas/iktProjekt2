from django.http import HttpResponseRedirect, HttpResponse, HttpRequest
from django.shortcuts import render, redirect 
from .forms import UploadMotherBoard

def upload(request : HttpRequest):
    
    if request.POST.get('done', None):
        return redirect("/upload/motherboard")
    
    if request.POST.get('v', None):
        print("vvvvvvvvvvvvvvvvv")

    return render(request, "upload.html", {})

def motherboard(request : HttpRequest):

    if request.POST:
        form = UploadMotherBoard(request.POST)

        print(request.POST)
        if form.is_valid():
            form.save()
        else:
            print(form.errors)

    return render(request, "motherboard.html", {"form": UploadMotherBoard})