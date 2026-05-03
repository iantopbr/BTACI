// sw.js
self.addEventListener('install', () => {
    self.skipWaiting();
});

// Este listener serve para quando o teu servidor enviar um sinal de "Push"
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'Nova atualização disponível!',
    };
    event.waitUntil(
        self.registration.showNotification('Aviso do Sistema', options)
    );
});
