from django.db import models

class MotherBoard(models.Model):

    ATX = "ATX"
    Micro_ATX = "MC"
    Mini_ATX = "MIN"
    eATX = "E"

    options = [
        (ATX, "ATX"), (Micro_ATX, "Micro-ATX"), (Mini_ATX, "Mini-ATX"), (eATX, "eATX")
    ]

    name = models.CharField(max_length=50, editable=True)
    producer = models.CharField(max_length=100, editable=True)
    wiifAndBluetooth = models.BooleanField(editable=True)
    socketIsLGA = models.BooleanField(editable=True) #if true LGA if false PGA
    size = models.CharField(
        max_length = 3,
        choices = options,
        default = ATX,
        editable=True
    )
    price = models.IntegerField(editable=True)

    def __str__(self):
        return self.name

