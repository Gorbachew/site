# Generated by Django 2.1.1 on 2018-11-03 14:06

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('click', '0004_auto_20181031_2044'),
    ]

    operations = [
        migrations.AddField(
            model_name='millionaire',
            name='date_begin',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='millionaire',
            name='date_last_exit',
            field=models.DateTimeField(auto_now=True, verbose_name=''),
        ),
    ]
