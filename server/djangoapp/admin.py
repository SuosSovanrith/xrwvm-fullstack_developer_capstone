from django.contrib import admin
from .models import CarMake, CarModel


# CarModelInline class
class CarModelInline(admin.TabularInline):
    model = CarModel
    extra = 1
    fields = (
        'name',
        'type',
        'year',
        'engine_type',
        'seating_capacity',
    )
    show_change_link = True


# CarMakeAdmin class
class CarMakeAdmin(admin.ModelAdmin):
    list_display = ('name', 'country_of_origin', 'founded_year')
    search_fields = ('name', 'country_of_origin')
    inlines = [CarModelInline]


# CarModelAdmin class
class CarModelAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'car_make',
        'type',
        'year',
        'engine_type',
        'seating_capacity',
    )
    list_filter = ('type', 'year', 'engine_type')
    search_fields = ('name', 'car_make__name')


# Register models here
admin.site.register(CarMake, CarMakeAdmin)
admin.site.register(CarModel, CarModelAdmin)
