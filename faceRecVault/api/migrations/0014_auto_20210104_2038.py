# Generated by Django 3.1.2 on 2021-01-05 02:38

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20210104_2011'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vaultentry',
            name='last_edited',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 1, 5, 2, 38, 43, 224087, tzinfo=utc), null=True),
        ),
    ]
