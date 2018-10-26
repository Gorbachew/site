#-*- coding: utf-8 -*-
from django.db import models
from django.contrib.auth.models import User
from django import forms

# Create your models here.
class Articles(models.Model):
    class Meta():
        db_table = 'Articles'
    title = models.CharField(max_length = 120)
    author =  models.ForeignKey(User,on_delete=models.CASCADE,)
    post = models.TextField()
    date = models.DateTimeField()
    likes = models.IntegerField(default=0)
    comm = models.IntegerField(default=0)
    """docstring for News."""
    def __str__(self):
        return self.title

class Comments(models.Model):
    class Meta():
        db_table = 'Comments'
    text = models.TextField(verbose_name="")
    author = models.ForeignKey(User,on_delete=models.CASCADE,)
    date = models.DateTimeField()
    likes = models.IntegerField(default=0)
    articles = models.ForeignKey(Articles,on_delete=models.CASCADE,)

class LikesArticles(models.Model):
    class Meta():
        db_table = 'LikesArticles'
    author =  models.ForeignKey(User,on_delete=models.CASCADE,)
    date = models.DateTimeField()
    articles = models.ForeignKey(Articles,on_delete=models.CASCADE,)

class LikesComments(models.Model):
    class Meta():
        db_table = 'LikesComments'
    author =  models.ForeignKey(User,on_delete=models.CASCADE,)
    date = models.DateTimeField()
    articles = models.ForeignKey(Articles,on_delete=models.CASCADE,)
    comments = models.ForeignKey(Comments,on_delete=models.CASCADE,)
