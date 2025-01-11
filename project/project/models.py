from django.db import models

class MotherBoard(models.Model):

    ATX = "ATX"
    Micro_ATX = "MC"
    Mini_ITX = "MIN"    
    eATX = "E"

    options = [
        (ATX, "ATX"), (Micro_ATX, "Micro-ATX"), (Mini_ITX, "Mini-ITX"), (eATX, "eATX")
    ]

    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    wiifAndBluetooth = models.BooleanField()
    socketIsLGA = models.BooleanField() #if true LGA if false PGA
    size = models.CharField(
        max_length = 3,
        choices = options,
        default = ATX,
    )
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField( default='1')

    def __str__(self):
        return self.name

class CPU(models.Model):
    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    clockSpeed = models.FloatField()
    cores = models.IntegerField()
    socketIsLGA = models.BooleanField()
    overclocking = models.BooleanField()
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField( default='1')

    def __str__(self):
        return self.name

class GPU(models.Model):
    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    vRam = models.IntegerField()
    size = models.IntegerField()
    consumption = models.IntegerField()
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField( default='1')

    def __str__(self):
        return self.name
    

class PSU(models.Model):
    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    output = models.IntegerField()
    efficiency = models.IntegerField()
    fanSize = models.IntegerField()
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField( default='1')

    def __str__(self):
        return self.name
    
class RAM(models.Model):

    DDR3 = 3
    DDR4 = 4
    DDR5 = 5

    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    ddr = models.CharField(
        max_length=1,
        choices=[
            (DDR3, "DDR3"), (DDR4, 'DDR4'), (DDR5, 'DDR5')
            ],
        default=DDR5
    )
    capacity = models.IntegerField()
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField( default='1')

    def __str__(self):
        return self.name

class SSD(models.Model):
    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    isSATA = models.BooleanField() # SATA or M2
    capacity = models.IntegerField()
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField( default='1')

    def __str__(self):
        return self.name
    
class monitor(models.Model):

    FULLHD = "1920x1080"
    QHD = "2560x1440"
    ULTRAHD = "3840x2160"

    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    refresh = models.IntegerField()
    size = models.FloatField()
    resolution = models.CharField(
        max_length=9,
        choices=[
            (FULLHD, "1920x1080"), (QHD, "2560x1440"), (ULTRAHD, "3840x2160")
        ]
    )
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField( default='1')

    def __str__(self):
        return self.name

class mouse(models.Model):
    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    dpi = models.IntegerField()
    isWired = models.BooleanField()
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField(default='1')

    def __str__(self):
        return self.name

class keyboard(models.Model):

    REDS = "RS"
    BLUES = "BS"
    BROWNS = "BRS"

    name = models.CharField(max_length=50)
    producer = models.CharField(max_length=100)
    swich = models.CharField(
        max_length=3,
        choices=[(REDS, "RS"), (BLUES, "BS"), (BROWNS, "BRS")]
    )
    description = models.CharField(max_length=200, default='a')
    price = models.IntegerField(default='1')

    def __str__(self):
        return self.name