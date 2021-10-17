

const form = document.querySelector('#add-link-form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').add({
        name: form.name.value,
        link: form.link.value
    });
    form.name.value = '';
    form.link.value = '';
});

