from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Millionaire(models.Model):
    class Meta():
        db_table = 'Millionaire'
    score = models.DecimalField(max_digits=50, decimal_places=2, blank = True,default=0,verbose_name="")
    cash = models.DecimalField(max_digits=50, decimal_places=2, blank = True,default=0,verbose_name="")
    currency = models.IntegerField(blank = True,default=1,verbose_name="")
    user =  models.ForeignKey(User,on_delete=models.CASCADE,verbose_name="")
    date_begin = models.DateTimeField(verbose_name="",auto_now_add=True)
    date_last_exit = models.DateTimeField(verbose_name="",auto_now=True)
    levelbuild = models.IntegerField(blank = True,default=0,verbose_name="")
    bastshoes = models.IntegerField(blank = True,default=0,verbose_name="")
    cats = models.IntegerField(blank = True,default=0,verbose_name="")
    price_upgraide_currency = models.IntegerField(blank = True,default=300,verbose_name="")
    price_levelbuild = models.IntegerField(blank = True,default=100,verbose_name="")
    price_bastshoes = models.IntegerField(blank = True,default=50,verbose_name="")
    price_cats = models.IntegerField(blank = True,default=100,verbose_name="")
