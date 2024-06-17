document.addEventListener('DOMContentLoaded', function() {
  let proxyList = [
    'gb-glw-wg-socks5-001.relays.mullvad.net',
    'gb-glw-wg-socks5-002.relays.mullvad.net',
    'gb-lon-wg-socks5-001.relays.mullvad.net',
    'gb-lon-wg-socks5-002.relays.mullvad.net',
    'gb-lon-wg-socks5-003.relays.mullvad.net',
    'gb-lon-wg-socks5-004.relays.mullvad.net',
    'gb-lon-wg-socks5-005.relays.mullvad.net',
    'gb-lon-wg-socks5-006.relays.mullvad.net',
    'gb-lon-wg-socks5-007.relays.mullvad.net',
    'gb-lon-wg-socks5-008.relays.mullvad.net',
    'gb-lon-wg-socks5-201.relays.mullvad.net',
    'gb-lon-wg-socks5-202.relays.mullvad.net',
    'gb-lon-wg-socks5-203.relays.mullvad.net',
    'gb-lon-wg-socks5-204.relays.mullvad.net',
    'gb-lon-wg-socks5-301.relays.mullvad.net',
    'gb-lon-wg-socks5-302.relays.mullvad.net',
    'gb-lon-wg-socks5-303.relays.mullvad.net',
    'gb-lon-wg-socks5-304.relays.mullvad.net',
    'gb-mnc-wg-socks5-001.relays.mullvad.net',
    'gb-mnc-wg-socks5-002.relays.mullvad.net',
    'gb-mnc-wg-socks5-003.relays.mullvad.net',
    'gb-mnc-wg-socks5-004.relays.mullvad.net',
    'gb-mnc-wg-socks5-005.relays.mullvad.net',
    'gb-mnc-wg-socks5-006.relays.mullvad.net',
    'gb-mnc-wg-socks5-007.relays.mullvad.net',
    'gb-mnc-wg-socks5-008.relays.mullvad.net'
  ];

  function displayNotification(message, isError = false) {
    const notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.style.color = isError ? 'red' : 'green';

    // Clear notification after 3 seconds
    setTimeout(() => {
      notificationElement.textContent = '';
    }, 3000);
  }

  function selectRandomProxy() {
    const randomList = Math.floor(Math.random() * proxyList.length);
    const randomProxy = proxyList[randomList];

    const proxySettings = {
      proxyType: 'manual',
      socksVersion: 5,
      socks: randomProxy,
      port: 1080,
      proxyDNS: true
    };

    browser.proxy.settings.set({ value: proxySettings }).then(() => {
      console.log('Set to:', randomProxy);
      displayNotification(`Set to: ${randomProxy}`);
    }).catch((error) => {
      console.error('Failed to set:', error);
      displayNotification('Error: Make sure this can run in private windows.', true);
    });
    
  }

  document.getElementById('action-btn').addEventListener('click', selectRandomProxy);

});