from django.urls import path, include

from rest_framework import routers
from .views import TodoViewSet

router = routers.SimpleRouter()

# Todo
router.register(r'todo', TodoViewSet, basename='todo')


urlpatterns = [
    # Router
    path('api/', include(router.urls)),
]
