from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UsersImages(models.Model):
    class Meta():
        db_table = 'UsersImages'
    image = models.ImageField(upload_to="images/",blank=True,verbose_name="")
    date = models.DateTimeField()
    avatar = models.BooleanField(default=False)
    user =  models.ForeignKey(User,on_delete=models.CASCADE,)

class AdditionalUsers(models.Model):
    class Meta():
        db_table = 'AdditionalUsers'
    rating = models.IntegerField(default=0)
    city = models.CharField(max_length = 120,default='',blank = True)
    phonenumber = models.CharField(max_length = 11,default='',blank = True)
    status = models.CharField(max_length = 120,default='',blank = True)
    date_of_birth = models.DateField(null=True,blank = True)
    user = models.ForeignKey(User,on_delete=models.CASCADE,)
