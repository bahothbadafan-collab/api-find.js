export default async function handler(req, res) {
    const { upi_id } = req.query;
    const WESTEROS_URL = "https://westeros.famapp.in/txn/create/payout/add/";
    
    const headers = {
        'Content-Type': 'application/json',
        'authorization': 'Token eyJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiZXBrIjp7Imt0eSI6Ik9LUCIsImNydiI6Ilg0NDgiLCJ4IjoicGEwWmVNd255eFBKYXB5ZU9udXlkV1J1OEJWbFlMY1l2YkliUC1FOXhkdUo2dzNGbmNOTDFHMlZqVm9ZZWktOGEzRlRaX29tdGFRIn0sImFsZyI6IkVDREgtRVMifQ.._Fz2hxuGqpjf7V1pCeznsA.g4R7FbdRU3R7m1j3bkSyEljVTsqv8lLCEDy4Vsh2-06j1w1lw4f7ME6j6HB_B_8GMV6H63BR2mU-ogNBW1uKIDDiJQFKn4KkmOdbZX_Gr7y6BIty5FwqV6Tx4pk2NVMdl07eNPyLZZExpp9whLOOxrB02fSxMTptvHMYsSAkQaEt1eHaLkERPSj84loywzsFjWSmgYlr9Tt0MaFoB4Va348_ZFs1JI1sDpq9ZEicW2RBnz2vka2tz_zki-5rj7Enhi9HP5xMoo9XOwvmnvZAAQ.tWG08-yG0nr1vF7VKDUUC4zLHbkB3rYegjW47kP5Vk8',
        'User-Agent': 'A015 | Android 15 | Dalvik/2.1.0'
    };

    try {
        const response = await fetch(WESTEROS_URL, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ "upi_string": `upi://pay?pa=${upi_id}`, "init_mode": "00", "is_uploaded_from_gallery": false })
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (e) { res.status(500).json({ error: "Failed" }); }
}
