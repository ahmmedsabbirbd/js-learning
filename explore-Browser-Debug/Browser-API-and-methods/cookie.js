const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split(' ');

    const findCookie = allCookie.find(c=> c.includes(name));
    console.log(findCookie);
}

getCookie('_ga');