from django.db import models


class Item(models.Model):
    name = models.CharField(
        max_length=60
    )
    description = models.CharField(max_length=240)
    image = models.URLField()
    price = models.FloatField(blank=False, null=False)
    old_price = models.PositiveIntegerField(blank=True, null=True)
    on_sale = models.BooleanField(default=False)
    production_year = models.IntegerField(blank=True, null=True)
    display_size = models.CharField(max_length=80, blank=True, null=True)
    display_type = models.CharField(max_length=80, blank=True, null=True)
    operating_system = models.CharField(max_length=80, blank=True, null=True)
    color = models.CharField(max_length=80, blank=True, null=True)
    ram = models.IntegerField(max_length=80, blank=True, null=True)
    storage = models.IntegerField(max_length=80, blank=True, null=True)

    def __str__(self) -> str:
        return self.name + ' - ' + self.description
