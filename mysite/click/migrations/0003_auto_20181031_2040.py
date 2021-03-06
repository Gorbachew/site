# Generated by Django 2.1.1 on 2018-10-31 17:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('click', '0002_auto_20181031_1944'),
    ]

    operations = [
        migrations.AlterField(
            model_name='millionaire',
            name='cash',
            field=models.FloatField(default=0, verbose_name=''),
        ),
        migrations.AlterField(
            model_name='millionaire',
            name='cats',
            field=models.IntegerField(default=0, verbose_name=''),
        ),
        migrations.AlterField(
            model_name='millionaire',
            name='currency',
            field=models.IntegerField(default=1, verbose_name=''),
        ),
        migrations.AlterField(
            model_name='millionaire',
            name='score',
            field=models.BigIntegerField(default=0, verbose_name=''),
        ),
        migrations.AlterField(
            model_name='millionaire',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name=''),
        ),
    ]
