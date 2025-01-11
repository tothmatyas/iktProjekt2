from django.forms import ModelForm
from django import forms
from ..models import MotherBoard, CPU, GPU, PSU, RAM, SSD, monitor, keyboard, mouse

class UploadMotherBoard(ModelForm):
    name = forms.CharField(max_length=50, required=True)
    producer = forms.CharField(max_length=100, required=True)
    wiifAndBluetooth = forms.BooleanField(required=False)
    socketIsLGA = forms.BooleanField(required=False)#if true LGA if false PGA
    size = forms.CharField()
    description = forms.CharField(max_length=200)
    price = forms.IntegerField(required=True)

    class Meta:
        model = MotherBoard
        fields = ['name', 'producer', 'wiifAndBluetooth', 'socketIsLGA', 'size', 'description', 'price']


class UploadCPU(ModelForm):
    name = forms.CharField(max_length=50, required=True)
    producer = forms.CharField(max_length=100, required=True)
    clockSpeed = forms.FloatField(required=True)
    cores = forms.IntegerField(required=True)
    socketIsLGA = forms.BooleanField(required=False)
    overclocking = forms.BooleanField(required=False)
    description = forms.CharField(max_length=200)
    price = forms.IntegerField(required=True)

    class Meta:
        model = CPU
        fields = ['name', 'producer', 'clockSpeed', 'cores', 'socketIsLGA', 'overclocking', 'description', 'price']


class UploadGPU(ModelForm):
    name = forms.CharField(max_length=50, required=True)
    producer = forms.CharField(max_length=100, required=True)
    vRam = forms.IntegerField(required=True)
    size = forms.IntegerField(required=True)
    consumption = forms.IntegerField(required=True)
    description = forms.CharField(max_length=200)
    price = forms.IntegerField(required=True)

    class Meta:
        model = GPU
        fields = ['name', 'producer', 'vRam', 'size', 'consumption', 'description', 'price']

class UploadPSU(ModelForm):
    name = forms.CharField(max_length=50, required=True)
    producer = forms.CharField(max_length=100, required=True)
    output = forms.IntegerField(required=True)
    efficiency = forms.IntegerField(required=True)
    fanSize = forms.IntegerField(required=True)
    description = forms.CharField(max_length=200)
    price = forms.IntegerField(required=True)

    class Meta:
        model = PSU
        fields = ['name', 'producer', 'output', 'efficiency', 'fanSize', 'description', 'price']

class UploadRAM(ModelForm):
    name = forms.CharField(max_length=50, required=True)
    producer = forms.CharField(max_length=100, required=True)
    ddr = forms.CharField(required=True)
    capacity = forms.IntegerField(required=True)
    description = forms.CharField(max_length=200)
    price = forms.IntegerField(required=True)

    class Meta:
        model = RAM
        fields = ['name', 'producer', 'ddr', 'capacity', 'description', 'price']

class UploadSSD(ModelForm):
    name = forms.CharField(max_length=50, required=True)
    producer = forms.CharField(max_length=100, required=True)
    isSATA = forms.BooleanField() # SATA or M2
    capacity = forms.IntegerField(required=True)
    description = forms.CharField(max_length=200)
    price = forms.IntegerField(required=True)

    class Meta:
        model = SSD
        fields = ['name', 'producer', 'isSATA', 'capacity', 'description', 'price']

class UploadMonitor(ModelForm):
    name = forms.CharField(max_length=50)
    producer = forms.CharField(max_length=100)
    refresh = forms.IntegerField()
    size = forms.FloatField()
    resolution = forms.CharField()
    description = forms.CharField(max_length=200)
    price = forms.IntegerField()

    class Meta:
        model = monitor
        fields = ['name', 'producer', 'refresh', 'resolution', 'description', 'price']

class UploadMouse(ModelForm):
    name = forms.CharField(max_length=50)
    producer = forms.CharField(max_length=100)
    dpi = forms.IntegerField()
    isWired = forms.BooleanField()
    description = forms.CharField(max_length=200)
    price = forms.IntegerField()

    class Meta:
        model = mouse
        fields = ['name', 'producer', 'dpi', 'isWired', 'description', 'price']

class UploadKeyboard(ModelForm):
    name = forms.CharField(max_length=50)
    producer = forms.CharField(max_length=100)
    swich = forms.CharField()
    description = forms.CharField(max_length=200)
    price = forms.IntegerField()

    class Meta:
        model = keyboard
        fields = ['name', 'producer', 'swich', 'description', 'price']