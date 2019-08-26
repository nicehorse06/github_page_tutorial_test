let client_id = '80stfocyvne9dzzxyvz4j4x9yl75bd'
let targetUrl =
  `https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&client_id=${client_id}`;
let re = new XMLHttpRequest();
re.open("GET", targetUrl);
re.onload = () => {
  let data = JSON.parse(re.responseText);
  render_page(data);
};
re.send();

// 偵測存在的col數量再做渲染
let col_num = document.querySelector('.row').children.length

let render_page = (data) => {
  //開發方便先用block-id表示每個col
  for (let i = 0; i < col_num; i++) {
    document.querySelector(`#block-${i + 1} .display_name`).innerText =
      data.streams[i].channel.display_name;
    document.querySelector(`#block-${i + 1} .streamer-name`).innerText =
      data.streams[i].channel.name;
    document.querySelector(`#block-${i + 1} .channel-info-photo`).src =
      data.streams[i].channel.logo;
    document.querySelector(
      `#block-${i + 1} .channel-image`
    ).style.backgroundImage = `url('${data.streams[i].preview.medium}')`;
  }
};
