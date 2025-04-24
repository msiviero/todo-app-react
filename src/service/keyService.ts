export interface KeyGenerator {
    generateKey(): string;
}

export const uuidKeyGenerator: KeyGenerator = {
    generateKey() {
        return crypto.randomUUID();
    }
};
