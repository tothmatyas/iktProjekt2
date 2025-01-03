from django.forms import ModelForm
from django import forms
from ..models import MotherBoard

class UploadMotherBoard(ModelForm):
    name = forms.CharField(max_length=50, required=True)
    producer = forms.CharField(max_length=100, required=True)
    wiifAndBluetooth = forms.BooleanField(required=False)
    socketIsLGA = forms.BooleanField(required=False)#if true LGA if false PGA
    size = forms.CharField(required=True)
    price = forms.IntegerField(required=True)

    class Meta:
        model = MotherBoard
        fields = ['name', 'producer', 'wiifAndBluetooth', 'socketIsLGA', 'size', 'price',]