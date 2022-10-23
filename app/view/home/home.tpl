<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/home.css" />
  </head>
  <body>
    <div>
      userName: {{user.username}}
      &&
      password: {{user.password}}
    </div>
    <div class="desk">
      {% for result in data %}
        <div class="item" >
          {{ result }}
        </div>
      {% endfor %}
    </div>

  </body>
</html>