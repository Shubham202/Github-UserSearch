let form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('.main-section').style.display = 'grid';
    let userName = document.querySelector('input').value.trim();
    fetch('https://api.github.com/users/'+userName)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        if(data.name == null)
        {
            var headName = data.login;
        }
        else
        {
            var headName = data.name;
        }
        document.querySelector('.img-container').innerHTML = `<img class="avatar" src="${data.avatar_url}" />`;
        document.querySelector('.main1').innerHTML = `
        <h1 class="head">${headName}</h1>
        <div class="date-joined">${data.created_at.slice(0,10)}</div>
        `;
        if (data.bio == null) {
            document.querySelector('.main2').innerHTML = `<div class="bio">This profile has no bio</div>`;
        }
        else{
            document.querySelector('.main2').innerHTML = `<div class="bio">${data.bio}</div>`;
        }
        document.querySelector('.main3').innerHTML = `
            <div class="element repos">
                <div class="r1">Repos</div>
                <div class="r2">${data.public_repos}</div>
            </div>
            <div class="element followers">
                <div class="fs1">Followers</div>
                <div class="fs2">${data.followers}</div>
            </div>
            <div class="element following">
                <div class="fg1">following</div>
                <div class="fg2">${data.following}</div>
            </div>
        `;
        if (data.location == null) {
            var location = "This profile has no location";
        }
        else{
            var location = data.location;
        }
        if (data.twitter_username == null) {
            var twitter = "Twitter account not linked";
        }
        else{
            var twitter = data.twitter_username;
        }
        if (data.blog == null) {
            var blog = "No Bolgs";
        }
        else{
            var blog = data.blog;
        }
        document.querySelector('.main4').innerHTML = `
            <div class="address">${location}</div>
            <div class="twitter">${twitter}</div>
            <div class="github"><a href = "${blog}">${blog}</a></div>
        `;
    });
});