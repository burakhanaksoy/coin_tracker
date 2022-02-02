# coin_tracker


<b>Coin tracker is a small web app developed by [Burakhan Aksoy](https://github.com/burakhanaksoy) and [Oguzhan Aksoy](https://github.com/AxoyTO). </b>

<div align="left">
  
<b>Table Of Contents</b> |
------------ | 
[Motivation](#motivation) 
[Usage](#usage) 
[Deployment](#deployment)
  
</div>

<p id="motivation">
<h2>Motivation</h2>
</p>

Our main motivation to make this project is as follows:

- Improving our knowledge on global css (When we change theme, i.e., from light to dark, the whole UI color changes, thx to global css).
- Improving our Javascript acumen.
- Using [ant design's](https://www.antdv.com/docs/vue/introduce/) components.
- Using different hooks in Vue JS, i.e., `beforeCreate()`.
- Using [Vue Apexchart's](https://apexcharts.com/docs/vue-charts/) line chart.


---

<p id="usage">
<h2>Usage</h2>
</p>

In order to use this project, you should take a pull, and run `npm run serve` on `<Your Path>/coin_tracker/coin_tracker` path.

<img width="719" alt="Screen Shot 2022-02-02 at 10 48 00 AM" src="https://user-images.githubusercontent.com/31994778/152113804-76464857-1866-45bb-8ece-f03d64fb873f.png">

---

<p id="deployment">
<h2>Deployment</h2>
</p>

Now, this is the fun part. We deploy our project with [Heroku](https://cli.vuejs.org/guide/deployment.html#heroku).

<h3>npm run build</h3>

This is the first thing that we do. The command `npm run build` builds development code into production.

<img width="578" alt="Screen Shot 2022-02-02 at 10 51 03 AM" src="https://user-images.githubusercontent.com/31994778/152114194-7e186b9d-1be6-42c4-9387-1a0fd6fdb0cf.png">

This creates a new folder called `dist` on the project path.

<img width="355" alt="Screen Shot 2022-02-02 at 10 51 39 AM" src="https://user-images.githubusercontent.com/31994778/152114291-d49dd4c2-ebe5-4393-9c78-f815721e400b.png">

<h3>Handling .gitignore, server.js and package.json files </h3>

This is the second step. Here, we remove `/dist` from `.gitignore`.

<b>Main reason we remove it is because when we push our commit to heroku, we want `dist` folder to be included, not removing it from .gitignore would ignore that folder.</b>

Later, we create `server.js`. This file is run when we push to heroku.

Lastly, we add a small line to `package.json`, which is as follows:

<img width="406" alt="Screen Shot 2022-02-02 at 11 08 02 AM" src="https://user-images.githubusercontent.com/31994778/152116253-dbc33c4d-66a5-425d-ac4f-71a7255a2983.png">

---

<h3>Heroku integration</h3>

This is the last part of deployment. In this part, we will push changes we made on previous files/folders to heroku.

```
$ cd your-project/
$ git init
$ heroku git:remote -a nameofyourapp
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

After these steps, your app will be deployed successfully.

<img width="681" alt="Screen Shot 2022-02-02 at 11 14 24 AM" src="https://user-images.githubusercontent.com/31994778/152117335-727b5ec3-853e-48e0-b8dc-0b7179d7effc.png">

<img width="567" alt="Screen Shot 2022-02-02 at 11 17 51 AM" src="https://user-images.githubusercontent.com/31994778/152117469-072a8e4d-1a2d-45a1-aa3d-e2d57d909e44.png">

Voila! [Here](https://coin-trackerr.herokuapp.com/) is our app.





