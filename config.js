module.exports = {
    username: "bet-renovate-bot",
    gitAuthor: "Bet Renovate Bot <337341+bet-renovate-bot@users.noreply.github.com>",
    platform: 'github',
    onboarding: false, // disables the creation of renovate.json in each repository
    dependencyDashboard: true,
    labels: ["renovatebot"],
    packageRules: [
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['minor', 'patch', 'pin'],
            automerge: true,
        },
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['major'],
            automerge: false,
        },
    ],
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        automerge: true
    },
    updateLockFiles: true,
    repositories: ['bertrandmbanwi/devops-fully-automated-infra'],
};
