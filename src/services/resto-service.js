export default class RestoService {
    async getMenuItems() {
        const res = await fetch('http://localhost:3001/menu');
        return await res.json();
    }
}