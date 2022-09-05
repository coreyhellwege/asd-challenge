const hex = 'E3B8287D4290F7233814D7A47A291DC0F71B2806D1A53B311CC4B97A0E1CC2B93B31068593332F10C6A3352F14D1B27A3514D6F7382F1AD0B0322955D1B83D3801CDB2287D05C0B82A311085A033291D85A3323855D6BC333119D6FB7A3C11C4A72E3C17CCBB33290C85B6343955CCBA3B3A1CCBB62E341ACBF72E3255CAA73F2F14D1B27A341B85A3323855D6BB333055C4A53F3C55C7B22E2A10C0B97A291DC0F73E3413C3BE392819D1F73B331185A3323855CCBA2A3206D6BE3831108B';
const key = 'A5D75';

/**
 * Use Node's Buffer library to transform the hex strings into two Buffer objects, representing fixed-length sequences of bytes.
 * 
 * In order for the XOR comparison to work, the key buffer needs to be the same length as the hex buffer. 
 * Use the Buffer.from() method to achieve this by specifying the hex buffer's byte length and filling it with the key. 
 * (Note: The key must be repeated any number of times until its an even length, otherwise the buffer isnt calculated properly.
 * 
 * Then map over the hex buffer and do the Bitwise XOR comparison on each byte with the byte from the key buffer at the same index.
 * Convert the result to a string to reveal the message.
 * 
 * Buffer.from() takes a string to encode and the encoding charset.
 * Buffer.alloc() takes the Buffer size, fill and encoding charset.
 */
const xor = (hex, key) => {
    const hexBuf = Buffer.from(hex, 'hex'), keyBuf = Buffer.alloc(hexBuf.length, key.repeat(2), 'hex');
    return hexBuf.map((b, i) => b ^ keyBuf[i]).toString();
}

console.log(xor(hex, key));