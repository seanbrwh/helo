select users.username,users.user_id,posts.title,posts.img_url,posts.content,posts.author_id
from users
join posts on users.username = posts.username