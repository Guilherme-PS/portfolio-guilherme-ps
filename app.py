from flask import Flask, render_template, send_from_directory
from datetime import datetime
from dateutil.relativedelta import relativedelta
import requests

IMAGE_API = "https://api.github.com/users/Guilherme-PS"
PIN_PROJECT_API = "https://gh-pinned-api.vercel.app/api?user=Guilherme-PS"

idade = relativedelta(datetime.now(), datetime(2002, 10, 22)).years

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def home():
    pin_projects_response = requests.get(PIN_PROJECT_API)
    profile_img_response = requests.get(IMAGE_API)

    if profile_img_response.status_code == 200:
        profile_img = profile_img_response.json()["avatar_url"]
    else:
        profile_img = "static/imgs/Profile-Image.png"

    if pin_projects_response.status_code == 200:
        data = dict()

        for item in pin_projects_response.json():
            banner_url = f"https://raw.githubusercontent.com/Guilherme-PS/{item['name']}/main/ReadmeImg/banner.png"

            if requests.get(banner_url).status_code != 200:
                banner_url = "static/imgs/Placeholder.png"



            data[item["name"].replace("-"," ")] = {"description": item["description"],
                                                   "languages": item["languages"],
                                                   "url": item["url"],
                                                   "banner": banner_url
                                                   }
    else:
        data = None

    return render_template("index.html", profile_img=profile_img, age=idade, projects=data)

@app.route("/download")
def download():
    return send_from_directory("static", "files/Guilherme-de-Paiva.pdf", as_attachment=True)


if __name__ == "__main__":
    app.run()