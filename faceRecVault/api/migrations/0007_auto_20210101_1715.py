# Generated by Django 3.1.2 on 2021-01-01 23:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20201223_1935'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='imagecomponent',
            name='data',
        ),
        migrations.RemoveField(
            model_name='imagecomponent',
            name='date_created',
        ),
        migrations.RemoveField(
            model_name='textcomponent',
            name='date_created',
        ),
        migrations.RemoveField(
            model_name='vaultentry',
            name='date_created',
        ),
        migrations.AddField(
            model_name='imagecomponent',
            name='imageID',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='imagecomponent',
            name='order_key',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='textcomponent',
            name='order_key',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='vaultentry',
            name='last_edited',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
