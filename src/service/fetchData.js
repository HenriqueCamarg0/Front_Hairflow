export async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        return await response.json(); // Converte a resposta para JSON
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
}