from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Millionaire(models.Model):
    class Meta():
        db_table = 'Millionaire'
    score = models.BigIntegerField(blank = True,default=0,verbose_name="")
    cash = models.FloatField(blank = True,default=0,verbose_name="")
    currency = models.IntegerField(blank = True,default=1,verbose_name="")
    cats = models.IntegerField(blank = True,default=0,verbose_name="")
    user =  models.ForeignKey(User,on_delete=models.CASCADE,verbose_name="")
