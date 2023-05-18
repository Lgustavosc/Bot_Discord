const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembre o comando Git!"),

    async execute(interaction) {
        await interaction.reply({ embeds: [EmbedBuilder] })
    }
}