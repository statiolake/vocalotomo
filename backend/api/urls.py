from django.conf.urls import include, url
from django.urls import path
from rest_framework import routers
from . import views_lives
from .views import AuthRegister, AuthInfoGetView, AuthInfoUpdateView, UserRetrieve
from . import views_follow

urlpatterns = [
    path('users/', AuthRegister.as_view()),
    path('auth/me/', AuthInfoGetView.as_view()),
    path('auth/auth_update/', AuthInfoUpdateView.as_view()),
    path('users/<int:pk>/', UserRetrieve.as_view()),
    path('lives', views_lives.LivesView.as_view()),
    path('lives/<int:pk>', views_lives.LiveView.as_view()),
    path('live_registrations', views_lives.LiveRegistrationView.as_view()),
    path('follows', views_follow.FollowsView.as_view()),
]
