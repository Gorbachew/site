from django.urls import path

from . import views

urlpatterns = [
    path('', views.Millionaires, name='Millionaires'),
    path('newgame/', views.newgame, name='newgame'),
    path('save/', views.save, name='save'),
]
