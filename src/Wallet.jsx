import { BrowserProvider, ethers } from "ethers"
import { useState } from "react"
import { motion } from "framer-motion"
async function handleWallet() {
    if (window.ethereum) {
        console.log("present");
        const providers = new BrowserProvider(window.ethereum);
        await providers.send("eth_requestAccounts", []);
        const signer = await providers.getSigner()
        const address = await signer.getAddress();
        const chainId = await providers.getNetwork();
        console.log("chainId is ", chainId);
        console.log(address);
        const balance = await providers.getBalance(address);
        console.log("balance is ", String(balance));
        const balanceInEther = ethers.formatEther(balance);
        console.log("balance in ether is ", balanceInEther);
        const sendEth = await signer.sendTransaction({
            to: "0x0000000000000000000000000000000000000000",
            value: ethers.parseEther("0.000001")
        })
        console.log(sendEth);
    }
    else {
        console.log("no wallet");
    }
}

const Wallet = () => {
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");
    const [privateKey, setPrivateKey] = useState("");

    const handleEth = async () => {
        try {
            const providers = new BrowserProvider(window.ethereum);
            const signer = await providers.getSigner();
            const address = document.getElementById("address").value;
            const amount = document.getElementById("amount").value;
            const sendEth = await signer.sendTransaction({
                to: address,
                value: ethers.parseEther(amount)
            })
            console.log(sendEth);
        } catch (error) {
            alert("error");

            console.log(error);
        }
    }
    const handleSign = async () => {
        try {
            const providers = new BrowserProvider(window.ethereum);
            const signer = await providers.getSigner();
            const privateKey = document.getElementById("privateKey").value;
            const signature = await signer.signMessage(message);
            const verify = await signer.verifyMessage(message,signature);
            console.log(verify);
        } catch (error) {
            alert("cannot sign message");
            console.log(error);
        }
    }
    return (
        <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="flex flex-col justify-center items-center h-screen gap-3">
            <input className="bg-gray-800 text-white p-2 rounded-md" type="text" name="address" id="address" placeholder="Enter address" />
            <input className="bg-gray-800 text-white p-2 rounded-md" type="text" name="amount" id="amount" placeholder="Enter amount" />
            <motion.button whileHover={{scale:1.1}} className="bg-blue-500 text-white p-2 rounded-md" onClick={() => handleEth()}>Click me</motion.button>
            <motion.input  whileFocus={{scale:1.1}} animate={{scale:1}}  className="bg-gray-800 text-white p-2 rounded-md" type="text" name="message" id="message" placeholder="message" onChange={(e) => setMessage(e.target.value)} />
            <motion.input whileFocus={{scale:1.1}} animate={{scale:1}}  className="bg-gray-800 text-white p-2 rounded-md" type="text" name="privateKey" id="privateKey" placeholder="private key" onChange={(e) => setPrivateKey(e.target.value)} />
            <motion.button whileHover={{scale:1.1}} className="bg-blue-500 text-white p-2 rounded-md" onClick={() => handleSign()}>Sign</motion.button>

        </motion.div>
    )
}

export default Wallet