# Generated by Django 3.1.2 on 2021-01-06 00:59

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_auto_20210105_1857'),
    ]

    operations = [
        migrations.RenameField(
            model_name='imagecomponent',
            old_name='componentType',
            new_name='dataType',
        ),
        migrations.RenameField(
            model_name='textcomponent',
            old_name='componentType',
            new_name='dataType',
        ),
        migrations.AlterField(
            model_name='vaultentry',
            name='last_edited',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 1, 6, 0, 58, 52, 779704, tzinfo=utc), null=True),
        ),
    ]
