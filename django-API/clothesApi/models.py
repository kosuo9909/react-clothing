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
    season = models.CharField(max_length=60)

    def __str__(self) -> str:
        return self.name + ' - ' + self.description
