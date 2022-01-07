# Generated by Django 2.2.26 on 2022-01-07 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='live_register',
            constraint=models.UniqueConstraint(fields=('user', 'live'), name='unique_registration'),
        ),
    ]
