from django.shortcuts import render


def serve_vue(request):
    return render(request, "index.html")
