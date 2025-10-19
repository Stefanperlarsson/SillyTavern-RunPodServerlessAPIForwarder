import chalk from 'chalk';
import rpc from 'discord-rpc';
import { Router } from 'express';

const MODULE = '[SillyTavern-RunPodServerlessAPIForwarder]';

async function exit() {
    // Do some clean-up here...
    return Promise.resolve();
}

/**
 * Initializes the plugin
 */
async function init(router: Router) {
    console.log(chalk.green(MODULE), 'Plugin loaded!');
    // await connectToDiscord();
    //
    // router && router.post('/update', (req, res) => {
    //     const name = req.query.name;
    //     if (name) {
    //         console.log(chalk.green(MODULE), 'Updating Discord Rich Presence to', chalk.blue(name));
    //         const state = `Chatting with ${name}`;
    //         setActivity(state);
    //         res.status(200).send('OK');
    //     } else {
    //         console.log(chalk.green(MODULE), 'Resetting Discord Rich Presence');
    //         setActivity();
    //         res.status(204).send();
    //     }
    // });
    //
    // async function connectToDiscord() {
    //     client = new rpc.Client({ transport: 'ipc' });
    //
    //     client.once('ready', () => {
    //         console.log(chalk.green(MODULE), 'Discord Rich Presence is ready!');
    //         setActivity();
    //     });
    //
    //     client.on('connected', () => {
    //         connected = true;
    //     });
    //
    //     client.on('disconnected', () => {
    //         console.log(chalk.yellow(MODULE), 'Client disconnected!');
    //         connected = false;
    //     });
    //
    //     await client.login({ clientId: config.ClientID }).catch(console.error);
    // }
    //
    // async function setActivity(state?: string) {
    //     try {
    //         // Try to connect if not connected.
    //         if (!connected) {
    //             await connectToDiscord();
    //         }
    //
    //         // Still nothing? Avast!
    //         if (!connected) {
    //             console.error(chalk.yellow(MODULE), 'Not connected to a client');
    //             return;
    //         }
    //
    //         state = state || states[Math.floor(Math.random() * states.length)];
    //         await client.setActivity({
    //             details: config.Details,
    //             state: state,
    //             buttons: [
    //                 {
    //                     label: config.Button1,
    //                     url: config.Url1,
    //                 },
    //                 {
    //                     label: config.Button2,
    //                     url: config.Url2,
    //                 },
    //             ],
    //             largeImageKey: config.LargeImage,
    //             largeImageText: config.LargeImageText,
    //         }, process.pid);
    //     } catch {
    //         console.error(chalk.yellow(MODULE), 'Failed to set activity');
    //     }
    // }
}

export default {
    init,
    exit,
    info: {
        id: 'runpod-serverless',
        name: 'A forwarder for the RunPod Serverless API',
        description: 'This plugin will intercept all requests to the Automatic1111 API and forward them all to a single URL on a RunPod serverless function.',
    },
};
