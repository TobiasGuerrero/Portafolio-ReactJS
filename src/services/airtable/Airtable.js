import Airtable from "airtable";

async function obtenerProyectos() {
    try {
        const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
        const baseId = process.env.REACT_APP_BASE_ID;

        const base = new Airtable({ apiKey: accessToken }).base(baseId);
        const productsTable = base('proyectos');
        const records = await productsTable.select().all();

        if (records && records.length > 0) {
            const proyectos = records.map((record) => record.fields);
            return(proyectos);
        } else {
            console.log("No se encontraron proyectos.");
            return [];
        }
    } catch (error) {
        console.error(error);
    }
};

export default obtenerProyectos