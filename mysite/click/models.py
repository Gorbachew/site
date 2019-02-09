from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Millionaire(models.Model):
    class Meta():
        db_table = 'Millionaire'
    score = models.DecimalField(max_digits=50, decimal_places=2, blank = True,default=0,verbose_name="")
    cash = models.DecimalField(max_digits=50, decimal_places=2, blank = True,default=0,verbose_name="")
    user =  models.ForeignKey(User,on_delete=models.CASCADE,verbose_name="")
    date_begin = models.DateTimeField(verbose_name="",auto_now_add=True)
    date_last_exit = models.DateTimeField(verbose_name="",auto_now=True)
    builds_ruined = models.CharField(max_length = 10,default= '1111111111',verbose_name="")
    builds = models.CharField(max_length=43,default = '0000000000000000000000000000000000000000000',verbose_name="")
    peasant = models.IntegerField(default = 0, verbose_name = "")
    engeneer = models.IntegerField(default = 0, verbose_name = "")
    merchant = models.IntegerField(default = 0, verbose_name = "")
    scientist = models.IntegerField(default = 0, verbose_name = "")
    thief = models.IntegerField(default = 0, verbose_name = "")
    footer = models.IntegerField(default = 0, verbose_name = "")
    archer = models.IntegerField(default = 0, verbose_name = "")
    monk = models.IntegerField(default = 0, verbose_name = "")
    rich = models.IntegerField(default = 0, verbose_name = "")
