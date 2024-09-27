
export async function getTranslations(locale, namespace) {
    const { default: messages } = await import(`../messages/${locale}.json`);
    return messages[namespace];
}