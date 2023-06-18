# OSS Spreadsheet with Saturn CDN

We are developing a socially scalable and open-source metadata retrieval, indexing, and management tooling with a spreadsheet interface for decentralized CAD asset development and user training. Bandwidth is a major issue in South Asian classrooms and Filecoin Data tools fit right at the spot for quick data retrieval where learning via video streaming is not possible due to high latency or unavailability of a network for streaming.


## Requirements

- npx

## Browser client integration

1. Add this script tag to the <head> tag. `<script src="https://saturn.tech/widget.js" async></script>`. This will install the service worker.
2. Fetch the service worker.
`curl -o saturn-sw.js https://saturn.tech/saturn-sw.js`
3. Add the service worker JS file to the root path of your domain.
4. Run `npx serve`
5. Navigate to `http://localhost:3000`


