# Generated by Django 3.1.2 on 2021-01-05 01:14

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20210101_2216'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vaultentry',
            name='last_edited',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 1, 5, 1, 14, 4, 943215, tzinfo=utc), null=True),
        ),
    ]
