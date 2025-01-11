from django.http import HttpRequest
from django.shortcuts import render, redirect 
from .forms import UploadMotherBoard, UploadCPU, UploadGPU, UploadPSU, UploadRAM, UploadSSD, UploadMonitor, UploadMouse, UploadKeyboard

def upload(request : HttpRequest):
    
    if request.POST.get('done', None):
        return render(request, "motherboard.html", {
            'form': UploadMotherBoard
        })
    
    if request.POST.get('v', None):
        print("vvvvvvvvvvvvvvvvv")

    return render(request, "upload.html", {})

def motherboard(request, name):
    
    print(name)

    if name == "motherboard":

        if request.POST:
            form = UploadMotherBoard(request.POST)

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print(form.errors)

        return render(request, "motherboard.html", {
            "form": UploadMotherBoard,
            "name": name
            })

    elif name == "cpu":

        if request.POST:
            form = UploadCPU

            print(request.POST)
            if form.is_valid():
                form.save()
            else : 
                print("cpu" + form.errors)
        
        return render(request, "motherboard.html", {
            "form" : UploadCPU,
            "name": name
        }) 
    
    elif name == "gpu":

        if request.POST:
            form = UploadGPU

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("gpu" + form.errors)

        return render(request, "motherboard.html", {
            "form": UploadGPU,
            "name": name
        })
    
    elif name == "psu":

        if request.POST:
            form = UploadPSU

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("psu" + form.errors)

        return render(request, "motherboard.html", {
            "form": UploadPSU,
            "name": name
        })
    
    elif name == "ram":

        if request.POST:
            form = UploadRAM

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("ram" + form.errors)

        return render(request, "motherboard.html", {
            "form": UploadRAM,
            "name": name
        })
    
    elif name == "ssd":

        if request.POST:
            form = UploadSSD

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("ssd" + form.errors)

        return render(request, "motherboard.html", {
            "form": UploadSSD,
            "name": name
        })
    
    elif name == "monitor":

        if request.POST:
            form = UploadSSD

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("monitor" + form.errors)

        return render(request, "motherboard.html", {
            "form": UploadMonitor,
            "name": name
        })
    
    elif name == "mouse":

        if request.POST:
            form = UploadMouse

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("mouse" + form.errors)

        return render(request, "motherboard.html", {
            "form": UploadMouse,
            "name": name
        })
    
    elif name == "keyboard":

        if request.POST:
            form = UploadKeyboard

            print(request.POST)
            if form.is_valid():
                form.save()
            else:
                print("keyboard" + form.errors)

        return render(request, "motherboard.html", {
            "form": UploadKeyboard,
            "name": name
        })