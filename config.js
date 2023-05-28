module.exports = {
    username: "bet-renovate-bot",
    gitAuthor: "Bet Renovate Bot <337341+bet-renovate-bot@users.noreply.github.com>",
    platform: 'github',
    onboarding: true, // disables the creation of renovate.json in each repository
    dependencyDashboard: fasle,
    labels: ["renovatebot"],
    requiredStatusChecks: null,
    packageRules: [
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['minor', 'patch', 'pin'],
            automerge: true,
            recreateClosed: true
        },
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['major'],
            automerge: false,
            recreateClosed: true
        },
    ],
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        automerge: true
    },
    updateLockFiles: true,
    repositories: ['bertrandmbanwi/TerraformEksSonarqubeDeploy'],
};
