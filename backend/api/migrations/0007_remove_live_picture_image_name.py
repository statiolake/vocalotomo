# Generated by Django 2.2.26 on 2022-01-07 12:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220107_2020'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='live_picture',
            name='image_name',
        ),
    ]
