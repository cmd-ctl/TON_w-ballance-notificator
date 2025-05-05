### **TON Wallet Alert Bot**

**Project Description:**

This project is a Telegram bot built with Node.js using the `node-telegram-bot-api` and `tonweb` libraries. It monitors the balance of a specified TON wallet and notifies the user via Telegram if the balance drops below a predefined threshold.

**Key Features:**

* Connects to Telegram using a bot token and listens for incoming messages.
* Checks the TON wallet balance using `https://toncenter.com/api/v2/jsonRPC`.
* Sends an alert to the user if the balance is below the defined `cliffSum` (0.9 TON).
* Automatically checks the balance every 30 minutes.
* Monitoring starts upon receiving the first message from the user.

**Settings:**

* `token` — Telegram bot token.
* `userId` — Telegram user ID to send alerts to.
* `walletAddress` — TON wallet address to monitor.
* `cliffSum` — TON threshold that triggers the alert.

**Example Alert Message:**

```
Ballance UQCl4QWiGGNbQzcTm3gXUf: 0.82 TON
```

**Note:**
The bot starts monitoring after the first message from the user. The balance is converted from nanotons (`1e9`) to standard TON format.

---
