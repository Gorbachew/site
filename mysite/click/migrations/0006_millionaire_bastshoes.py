# Generated by Django 2.1.1 on 2018-11-06 00:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('click', '0005_auto_20181103_1706'),
    ]

    operations = [
        migrations.AddField(
            model_name='millionaire',
            name='bastshoes',
            field=models.IntegerField(blank=True, default=0, verbose_name=''),
        ),
    ]